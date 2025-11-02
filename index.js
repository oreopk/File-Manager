import fs from 'fs';
import os from 'os';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

let user ='User';
for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].startsWith('--username=')) {
        user = process.argv[i].replace('--username=', '');
    }
}

console.log(`Welcome to the File Manager, ${user}!`);

let currentDir = os.homedir();

const rl = createInterface({
  input: stdin,
  output: stdout,
});

function ls() {
    console.log('\n');
    const items = fs.readdirSync(currentDir, { withFileTypes: true });
    
    console.log('\nIndex   Name                       Type');
    console.log('--------------------------------------------------');
    for (let i = 0; i < items.length; i++) {
      const type =  items[i].isDirectory() ? 'directory' : 'file';
      console.log(`${ (i + 1).toString().padEnd(6)} ${items[i].name.padEnd(26)} ${type}`);
    }
    console.log('\n');
}

async function UserInput() {
   const input = await rl.question(`${currentDir}> `);
    if (input === 'ls') {
        ls();
    } else {
      console.log('Invalid command');
    }
    UserInput();
}

UserInput();