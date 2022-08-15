/*
  Warnings:

  - Made the column `userId` on table `playlists` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "playlists" DROP CONSTRAINT "playlists_userId_fkey";

-- AlterTable
ALTER TABLE "playlists" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "playlists" ADD CONSTRAINT "playlists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
