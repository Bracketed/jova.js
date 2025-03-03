/*!
 * range-parser
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */

type Ranges = Array<Range>;
type IndexedRanges = Array<IndexedRange>;

interface Range {
	start: number;
	end: number;
}

interface IndexedRange {
	start: number;
	end: number;
	index: number;
}

interface RangeOptions {
	combine?: boolean | undefined;
}
type ResultUnsatisfiable = -1;
type ResultInvalid = -2;
type Result = ResultUnsatisfiable | ResultInvalid;

function rangeParser(size: number, str: string, options?: { combine?: boolean | undefined }) {
	const index: number = str.indexOf('=');

	if (index === -1) return -2;

	// split the range string
	const arr: Array<string> = str.slice(index + 1).split(',');
	const ranges: Ranges = [];

	// parse all ranges
	for (var i = 0; i < arr.length; i++) {
		const range: Array<string> = arr[i].split('-');
		var start: number = parseInt(range[0], 10);
		var end: number = parseInt(range[1], 10);

		// -nnn

		if (isNaN(start)) {
			start = size - end;
			end = size - 1;

			// nnn-
		} else if (isNaN(end)) end = size - 1;

		// limit last-byte-pos to current length
		if (end > size - 1) end = size - 1;

		// invalid or unsatisifiable
		if (isNaN(start) || isNaN(end) || start > end || start < 0) continue;

		// add range
		ranges.push({
			start: start,
			end: end,
		});
	}

	if (ranges.length < 1) return -1; // unsatisifiable

	return options && options.combine ? combineRanges(ranges) : ranges;
}

function combineRanges(ranges: Ranges) {
	const ordered: IndexedRanges = ranges.map(mapWithIndex).sort(sortByRangeStart);

	for (var j = 0, i = 1; i < ordered.length; i++) {
		const range: IndexedRange = ordered[i];
		const current: IndexedRange = ordered[j];

		if (range.start > current.end + 1)
			// next range
			ordered[++j] = range;
		else if (range.end > current.end) {
			// extend range
			current.end = range.end;
			current.index = Math.min(current.index, range.index);
		}
	}

	// trim ordered array
	ordered.length = j + 1;

	// generate combined range
	const combined: Ranges = ordered.sort(sortByRangeIndex).map(mapWithoutIndex);

	return combined;
}

function mapWithIndex(range: Range, index: number) {
	return {
		start: range.start,
		end: range.end,
		index: index,
	};
}

function mapWithoutIndex(range: Range) {
	return {
		start: range.start,
		end: range.end,
	};
}

function sortByRangeIndex(a: IndexedRange, b: IndexedRange) {
	return a.index - b.index;
}

function sortByRangeStart(a: Range, b: Range) {
	return a.start - b.start;
}

export {
	rangeParser as RangeParser,
	type IndexedRange,
	type IndexedRanges,
	type Range,
	type RangeOptions,
	type Ranges,
	type Result,
	type ResultInvalid,
	type ResultUnsatisfiable,
};
