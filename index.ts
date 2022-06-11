// let a: number = 5
// a = 10
// let b: string = 'Void'

// let b: boolean = true

// let arr: string[]

// let a: any = 3, 'asdad'


// functions
// function test(a: string, b: string): string {
//     return a + b;
// }

// test('a' + 'b')

// const test2 = (a: number, b: number | string): number | string => {
//     return a * b
// }

// test2(1, 2)

// let d: string[] = ['abc', 'abc']

// d =d.map((item: string) => item.sub())

// type Point = {
//     keyFirst: number;
//     keySecond: number;
// }

// function cont (elem: Point) {
//     return elem.keyFirst = 5
// }
// interface TypeItem {
//     q: number,
//     w: number
// }

// interface newItem extends TypeItem {
//     b: number
// }

// function test2 (x: TypeItem) {
//     return;
// }

interface user {
    userId: number ,
    id: number ,
    title: string,
    info: Info,
    tags: Tag[]
    
}
interface Info{
    desc: string,
    isActive: boolean
}
interface Tag{
    
            name: string,
            value: number
        
    
}

//
type actionType = 'up' | 'down'

function perfomAction(action: actionType | CompletedAction){
    switch (action) {
        case 'down':
            return -1
            case 'up':
                return 1
    }
}

interface CompletedAction {
    s: string
}