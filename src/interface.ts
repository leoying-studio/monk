interface ICountDown {
	day: number,
	hour: number,
	minutes: number,
	second: number
}

type timeType = Date | string | number;

interface IEvents {
   [k: string]: any
}

interface FreeObject {
	[k: string]: any
}

interface ExtendsWindow {
	Utils: any
}

export {ICountDown, timeType, IEvents, FreeObject, ExtendsWindow};