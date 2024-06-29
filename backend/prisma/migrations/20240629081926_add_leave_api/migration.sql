-- CreateEnum
CREATE TYPE "leaveType" AS ENUM ('ANUAL', 'BUSINESS', 'SICK', 'OTHERS');

-- CreateTable
CREATE TABLE "leave" (
    "id" SERIAL NOT NULL,
    "docNumber" TEXT NOT NULL,
    "docDate" TIMESTAMP(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "leaveType" "leaveType" NOT NULL,
    "remarks" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leaveLine" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "leaveId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leaveLine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "leave" ADD CONSTRAINT "leave_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaveLine" ADD CONSTRAINT "leaveLine_leaveId_fkey" FOREIGN KEY ("leaveId") REFERENCES "leave"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
