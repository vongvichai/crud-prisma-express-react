-- AlterTable
ALTER TABLE "Leave" ADD COLUMN     "rejectedAt" TIMESTAMP(3),
ADD COLUMN     "submittedAt" TIMESTAMP(3),
ALTER COLUMN "approvedAt" DROP NOT NULL,
ALTER COLUMN "approvedAt" DROP DEFAULT;
