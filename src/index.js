import { PrismaClient } from '@prisma/client'
// TODO: resolve the PrismaClient import error
const prisma = new PrismaClient()

console.log(prisma.human);

// TODO: connect the TypeScript here

const humansPromise = prisma.human.findMany({
    where: {
        name: {
            contains: 'mom'
        }
    }
});

humansPromise.then(data => {
    console.log(data);
})