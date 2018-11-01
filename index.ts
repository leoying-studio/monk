interface ICountDown {
	day: number,
	hour: number,
	minutes: number,
	second: number
}

type timeType = Date | string | number;

abstract class SuperClass {

	private _versions: number = 1.0;
	private _events = {};

	getVersions():number {
		return this._versions;
	}

	getEvents():any {
		return this._events;
	}

	on(name: string, callback: () => void):void {
		if (!this._events[name]) {
			(this._events[name] as Array<() => void>) = [callback];
		} else {
			this._events[name].push();
		}
	}

	emit(name: string, ...args:Array<any>):void {	
		if (this._events[name]) {
			let events = this._events[name];
			events.forEach((callback) => {
				callback(...args)
			});
		}
	}

	removeListen(name: string):void {
		this._events[name] = [];
	}

	/**
	 * 检查空指针异常
	 * @param value 
	 * return true | false
	 */
 	protected checkNullPointer(value: any): boolean {
		return typeof value !== 'undefined'; 
	}

	/**
	 * 交换排序
	 * @param collections Array
	 * @param orderBy boolean
	 */
	exchangeSort(collections: Array<number | string>, orderBy: boolean = true): void {
		for (let i = 0; i < collections.length; i++) {
			for (let j = 0; j < i; j++) {
				let ascend = orderBy ? collections[j] > collections[i] : collections[j] < collections[i];
				if (ascend) {
					let el = collections[i];
					collections[i] = collections[j];
					collections[j] = el;
				}
			}
		}
	}

	abstract removeByIndexs<T>(collections: T[], indexs: number[]): T[];

	abstract removeByValues<T, U extends T>(collections: T[], values: Array<U>, key?: string): T[]

	abstract findIndexByAttr<T, U extends T>(collections: T[], key: string, item: U): number;
}

class Utils extends SuperClass {

	removeByIndexs<T>(collections: T[], indexs: number[]): T[] {
		this.exchangeSort(indexs);
		indexs.reverse();
		for (var i = 0; i < indexs.length; i++) {
			for (var j = 0; j < collections.length; j++) {
				if (j === indexs[i]) {
					collections.splice(j, 1);
					j--;
					break;
				}
			}
		}
		return [...collections];
	}

	removeByValues<T, U extends T>(collections: T[], values: Array<U>, key?: string): T[] {
		let list = [...collections];
		for (var i = 0; i < values.length; i++) {
			let value = this.checkNullPointer(key) ? values[i][key] : values[i];
			for (var j = 0; j < list.length; j++) {
				let item = this.checkNullPointer(key) ? list[i][key] : list[i];
				if (value === item) {
					list.splice(j, 1);
					j--;
				}
			}
		}
		return list;
	}

	getIndexByAttr<T, K extends keyof T>(collections: T[], key: K, item: any): number {
		for (let i = 0; i < collections.length; i++) {
			let object = collections[i];
			if (object[key] === item[key]) {
				return i
			}
		}
	}

	static countDown(startTime: timeType, endTime: timeType): ICountDown {
		if (typeof startTime == "string" || typeof startTime == 'number') {
			startTime = new Date(startTime);
		}
		if (typeof endTime == "string" || typeof startTime == 'number') {
			endTime = new Date(endTime);
		}
		const countTime:number = (<number>endTime) - (<number>startTime) / 1000 ;
		let day =Math.floor( countTime / 3600 / 24 );
		let hour =Math.floor(( countTime / 3600  ) % 24);
		let minutes = Math.floor( (countTime / 60 ) % 60 );
		let second = Math.floor( countTime  % 60 );
		return {
			day: day,
			hour: hour,
			minutes: minutes,
			second: second
		}
	}

}



interface testType {
	name: string;
	age: number;
}

interface testType2 {
	name: string;
	age: number
}

interface testType3 {
	address: string
}


let util:Utils = new Utils();
let remaining = util.removeByIndexs<number>([1, 2, 3], [2]);
util.findIndexByAttr<testType, testType2>([{ name: 'zhangsan', age: 18 }, { name: 'zhangsan', age: 18 }], "", { name: 'ss', age: 18 });
let values = util.removeByValues<string, string>(['1','2','3'], ['1', '2']);
util.removeByIndexs<string>(['1', '2'], []);
util.getIndexByAttr<any,>([{name: '张三', age: 18}], 'name', {name: '张三', age: 18, address: ''});
console.log(values);
