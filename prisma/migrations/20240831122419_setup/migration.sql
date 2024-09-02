-- CreateTable
CREATE TABLE "WebSessions" (
    "sessionIdentifier" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,

    CONSTRAINT "WebSessions_pkey" PRIMARY KEY ("sessionIdentifier")
);

-- CreateTable
CREATE TABLE "VrfyDeveloperUsers" (
    "devIdentifier" TEXT NOT NULL,
    "linkedUserIdentifier" TEXT NOT NULL,

    CONSTRAINT "VrfyDeveloperUsers_pkey" PRIMARY KEY ("devIdentifier")
);

-- CreateTable
CREATE TABLE "VrfyUsers" (
    "userIdentifier" TEXT NOT NULL,
    "discordIdentifier" TEXT NOT NULL,
    "robloxIdentifier" TEXT,
    "userConfig" JSONB NOT NULL,

    CONSTRAINT "VrfyUsers_pkey" PRIMARY KEY ("userIdentifier")
);

-- CreateTable
CREATE TABLE "VrfyLinkedGuilds" (
    "guildIdentifier" TEXT NOT NULL,
    "discordIdentifier" TEXT NOT NULL,
    "guildConfig" JSONB NOT NULL,

    CONSTRAINT "VrfyLinkedGuilds_pkey" PRIMARY KEY ("guildIdentifier")
);
