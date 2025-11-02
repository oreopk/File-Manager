let user ='User';
for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].startsWith('--username=')) {
        user = process.argv[i].replace('--username=', '');
    }
}

console.log(`Welcome to the File Manager, ${user}!`);
