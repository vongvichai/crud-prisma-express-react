import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main()
{
  const it_depart = await prisma.department.create({
    data: {
      name: 'Information Technology'
    }
  });
  const alice = await prisma.user.create({
    data: {
      name: "Alice",
      password: "123456",
      employee: {
        create: {
          firstName: 'Alice',
          lastName: 'In Wonder Land',
          email: 'alice@prisma.io',
          department: { connect: { id: it_depart.id } }
        }
      },
    },
    include: {
      employee: true
    }
  });
  const bob = await prisma.user.create({
    data: {
      name: 'Bob',
      password: "123456",
      employee: {
        create: {
          firstName: 'Bob',
          lastName: 'Delan',
          email: 'bob@prisma.io',
          department: { connect: { id: it_depart.id } }
        }
      }
    },
    include: {
      employee: true
    }
  });
  console.log({ alice, bob })
  const bob_leave = await prisma.leave.create({
    data: {
      docNumber: "22405001",
      docDate: new Date("2022-12-01 13:06:23"),
      employee: { connect: { id: bob.employee.id } },
      leaveType: "SICK",
      remarks: "This is a bob leave document",
      leaveLines: {
        create:
          [
            { startDate: new Date("2022-12-13 13:06:23"), endDate: new Date("2022-12-12 13:06:23") },
            { startDate: new Date("2022-12-02 13:06:23"), endDate: new Date("2022-12-02 13:06:23") },
            { startDate: new Date("2022-12-03 13:06:23"), endDate: new Date("2022-12-03 13:06:23") }
          ]
      }
    }
  })
}
main()
  .then(async () =>
  {
    await prisma.$disconnect()
  })
  .catch(async (e) =>
  {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })