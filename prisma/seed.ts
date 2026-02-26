import { categores, dishes } from "./constants";
import { prisma } from "@/lib/prisma";


async function up() {
    await prisma.category.createMany({
        data: categores,
    });
    await prisma.dish.createMany({
        data: dishes,
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Dish" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });