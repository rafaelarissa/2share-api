-- CreateTable
CREATE TABLE "tracks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "tracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tracksPlaylists" (
    "id" SERIAL NOT NULL,
    "trackId" INTEGER NOT NULL,
    "playlistId" INTEGER NOT NULL,

    CONSTRAINT "tracksPlaylists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tracksPlaylists" ADD CONSTRAINT "tracksPlaylists_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracksPlaylists" ADD CONSTRAINT "tracksPlaylists_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "tracks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
