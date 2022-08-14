/*
  Warnings:

  - You are about to drop the column `album` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `artist` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `tracks` table. All the data in the column will be lost.
  - Added the required column `trackId` to the `tracks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tracksPlaylists" DROP CONSTRAINT "tracksPlaylists_trackId_fkey";

-- AlterTable
ALTER TABLE "tracks" DROP COLUMN "album",
DROP COLUMN "artist",
DROP COLUMN "duration",
DROP COLUMN "image",
DROP COLUMN "title",
ADD COLUMN     "trackId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tracksPlaylists" ALTER COLUMN "trackId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tracksPlaylists" ADD CONSTRAINT "tracksPlaylists_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "tracks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
