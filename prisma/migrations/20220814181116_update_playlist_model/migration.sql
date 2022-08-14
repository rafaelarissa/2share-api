-- DropForeignKey
ALTER TABLE "playlists" DROP CONSTRAINT "playlists_userId_fkey";

-- AlterTable
ALTER TABLE "playlists" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "playlists" ADD CONSTRAINT "playlists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
