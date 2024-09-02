FROM node:bullseye-slim AS base

WORKDIR /usr/src/app

COPY --chown=node:node package.json .
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node prisma/ prisma/
COPY --chown=node:node src/ src/

# Setting up yarn
RUN yarn set version stable

FROM base AS builder
COPY --chown=node:node tsconfig.json tsconfig.json

RUN yarn install
RUN yarn dlx prisma generate
RUN yarn tsc --noEmitOnError

FROM base AS runner
COPY --chown=node:node --from=builder /usr/src/app/dist dist
COPY --chown=node:node --from=builder /usr/src/app/yarn.lock .
RUN yarn workspaces focus --all --production
RUN yarn dlx prisma generate
RUN chown node:node /usr/src/app

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --start-period=5s \ 
    CMD curl -f http://localhost:3000/ || exit 1

CMD ["yarn", "node", "./dist/index.js"]