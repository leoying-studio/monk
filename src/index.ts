import SuperClass from './super';
import {ICountDown, timeType, FreeObject, ExtendsWindow} from './interface';
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

	removeByValues<T>(collections: T[], values:Array<any>, key?:string): T[] {
		let list = [...collections];
		for (var i = 0; i < values.length; i++) {
			let value = this.checkNullPointer(key) ? values[i][key] : values[i];
			for (var j = 0; j < list.length; j++) {
				let item  = (list[i] as FreeObject);
				let extItem = this.checkNullPointer(key) ? item[key] : item;
				if (value === extItem) {
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

	countDown(startTime: timeType, endTime: timeType): ICountDown {
		if (typeof startTime == "string" || typeof startTime == 'number') {
			startTime = new Date(startTime);
		}
		if (typeof endTime == "string" || typeof startTime == 'number') {
			endTime = new Date(<number | string>endTime);
		}
		const countTime:number = (<number>endTime) - (<any>startTime) / 1000 ;
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

(window as Window & ExtendsWindow).Utils = Utils;