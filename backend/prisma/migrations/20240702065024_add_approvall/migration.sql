-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "departmentHead" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Leave" ADD COLUMN     "approvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "approverId" TEXT;

-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
