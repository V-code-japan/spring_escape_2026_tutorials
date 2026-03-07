
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

// enum MyEnum {
//     //% block="one"
//     One,
//     //% block="two"
//     Two
// }

enum AgentStates {
    //% block="ついせきモード"
    follow = "follow",
    //% block="こうげきモード"
    attack = "attack",
    //% block="スポナーはかいモード"
    destroy = "destroy",
    //% block="ボタンモード"
    press = "press",
    //% block="カメラモード"
    observe = "observe",
    //% block="たいきモード"
    idle = "idle",
}

const eventNames = {
    0: "follow",
    1: "attack",
    2: "destroy",
    3: "press",
    4: "observe",
    5: "idle",
}

const stateNames = {
    follow: "ついせきモード",
    attack: "こうげきモード",
    destroy: "スポナーはかいモード",
    press: "ボタンモード",
    observe: "カメラモード",
    idle: "たいきモード",
}

/**
 * Custom blocks
 */

//% weight=100 color=#0fbc11 icon=""
namespace エージェント {
    /** 
     * @param state Agent State, eg: follow
     */
    //% block
    export function エージェントをつぎのモードにする(state: AgentStates):void {
        const eventId: string = `edu:${state}`;
        const modeName: string = stateNames[state];

        player.say(`state: ${state}`);
        player.say(`§cエージェントのモードをきりかえました：${modeName}`);
        player.execute(`event entity @c ${eventId}`);
    }
}

//% weight=100 color=#0fbc11 icon=""
// namespace custom {
//     /**
//      * TODO: describe your function here
//      * @param n describe parameter here, eg: 5
//      * @param s describe parameter here, eg: "Hello"
//      * @param e describe parameter here
//      */
//     //% block
//     export function foo(n: number, s: string, e: MyEnum): void {
//         // Add code here
//     }

//     /**
//      * TODO: describe your function here
//      * @param value describe value here, eg: 5
//      */
//     //% block
//     export function fib(value: number): number {
//         return value <= 1 ? value : fib(value -1) + fib(value - 2);
//     }
// }
