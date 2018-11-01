import {IEvents} from './interface';
abstract class SuperClass {

	private _versions: number = 1.0;
	private _events: IEvents = {};

	get versions():number {
		return this._versions;
	}

	set versions(value: number) {
		this._versions = value;
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
			events.forEach((callback: any) => {
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
}


export default SuperClass;