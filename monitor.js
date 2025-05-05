import chalk from 'chalk';
import { table } from 'node:console';
import os from 'node:os'

function monitor() {
    //take a snapshot
    //take another snapshot after a second

    const oldCpus = os.cpus()

    // console.log('old', oldCpus);

    setTimeout(() => {
        const newCpus = os.cpus()

        const usage = newCpus.map((cpu, i) => {
            return {
                // index:i+1,
                core: i,
                usage: calculateCPU(oldCpus[i], newCpus[i]) + '%',
            }
        })

        console.clear()
        console.log(chalk.bgMagenta(`------------System Stats------------`));
        console.table(usage)

        const usedMemeory = (os.totalmem() - os.freemem()) / (1024 ** 3)

        console.log('Memory used:',
            usedMemeory > 10
                ? chalk.redBright(
                    `${usedMemeory.toFixed(2)} GB / ${
                        os.totalmem() / (1024 * 1024 * 1024).toFixed(2)
                    } GB`
                )
                : chalk.greenBright(
                    `${usedMemeory.toFixed(2)} GB / ${
                        os.totalmem() / (1024 * 1024 * 1024).toFixed(2)
                    } GB`
                )

                

        )

        // console.log(`Memory used: ${usedMemeory.toFixed(2)} GB / ${os.totalmem() / (1024 * 1024 * 1024).toFixed(2)} GB`);

    }, 1000)
}
monitor()

function calculateCPU(oldCpus, newCpus) {
    const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a + b)

    const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b)

    const idle = newCpus.times.idle - oldCpus.times.idle

    const total = newTotal - oldTotal

    const used = total - idle

    return ((100 * used) / total).toFixed(1)
}

setInterval(monitor, 800)
// [
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 1278703,
//         nice: 0,
//         sys: 2149734,
//         idle: 18998656,
//         irq: 284203
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 904937,
//         nice: 0,
//         sys: 1229093,
//         idle: 20292953,
//         irq: 123015
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 1555187,
//         nice: 0,
//         sys: 1901125,
//         idle: 18970687,
//         irq: 195031
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 941859,
//         nice: 0,
//         sys: 1180703,
//         idle: 20304421,
//         irq: 112671
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 1251531,
//         nice: 0,
//         sys: 1495593,
//         idle: 19679875,
//         irq: 141984
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: { user: 821859, nice: 0, sys: 930265, idle: 20674859, irq: 81859 }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 1237937,
//         nice: 0,
//         sys: 1472453,
//         idle: 19716609,
//         irq: 132203
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: { user: 891265, nice: 0, sys: 947546, idle: 20588171, irq: 82750 }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: { user: 994656, nice: 0, sys: 1322281, idle: 20110031, irq: 79937 }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 1048312,
//         nice: 0,
//         sys: 1387312,
//         idle: 19991343,
//         irq: 72843
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 1118031,
//         nice: 0,
//         sys: 1449468,
//         idle: 19859500,
//         irq: 69281
//       }
//     },
//     {
//       model: '13th Gen Intel(R) Core(TM) i5-13420H',
//       speed: 2611,
//       times: {
//         user: 1195937,
//         nice: 0,
//         sys: 1467062,
//         idle: 19764000,
//         irq: 67781
//       }
//     }
//   ]