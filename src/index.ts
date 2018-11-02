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
			startTime = new Date(<string | number>startTime);
		}
		if (typeof endTime == "string" || typeof startTime == 'number') {
			endTime = new Date(<number | string>endTime);
		}
		const countTime:number = ((<any>endTime) - (<any>startTime)) / 1000 ;
		let day =Math.floor( countTime / 3600 / 24 );
		let hour =Math.floor(( countTime / 3600  ) % 24);
		let minutes = Math.floor( (countTime / 60 ) % 60 );
		let second = Math.floor( countTime  % 60 );
		return {
			day,
			hour,
			minutes,
			second: second
		}
	}

	removeDuplicates<T>(collections: T[], key: string): T[] {
		if (!collections.length) {
			return collections;
		}
		let _list = [collections.shift()];
		for (let i = 0; i < collections.length; i++) {
			let item = this.getValueByKey(collections[i], key);
			let inside =  _list.some(el => this.getValueByKey(el, key) === item);
			if (!inside) {
				_list.push(item);
			}
			collections.splice(i, 1);	
		}
		return _list;
	}

	getRandomScope(start: number, end: number ): number {
		let length = end - start + 1;
        let num = parseInt(<any>(Math.random() * (length) + end));
        return num;
	}

	public validate = {
		tel: (source: string): boolean => {
			let regex = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
			return regex.test(source);
		},
		mobile: (source: string):boolean => {
			var regex = /^((\(\d{3}\))|(\d{3}\-))?1\d{10}/;
			return regex.test(source);
		},
		email: (source: string):boolean => {
			let regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if(source.search(regex) != -1){
				return true;
			}
			return false;
		},
		chines: (source: string): boolean => {
			let regex = /^[\u4E00-\u9FA5]+$/;
			return regex.test(source);
		}
	};

	getRandomString(size: number): string {
		return Math.random().toString(size);
	}

	getRandomStr(size: number): string {
		return this.getRandomString(size);
	}

}

(window as ExtendsWindow).Utils = Utils;