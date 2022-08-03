import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
   // connect the client
   await prisma.$connect();

   await prisma.user.create({
     data: {
        email: 'hello@fdasf.com',
        password: '123456',
        avatar: 'https://i.pravatar.cc/300?img=1',
        posts: {
           create: {

              // @ts-ignore
               text: 'This is my first post',
               slug: 'my-first-post',
               avatar: 'https://avatars0.githubusercontent.com/u/17098120?s=460&v=4'
           }
        }
     }
   })

   // ... you will write your Prisma Client queries here
   const allUsers = await prisma.user.findMany();
   console.log(allUsers);
   console.dir(allUsers, { depth: null });
}

main()
.then(async () => {
   await prisma.$disconnect();
})
.catch(async (e) => {
   console.error(e);
   await prisma.$disconnect();
   process.exit(1);
})