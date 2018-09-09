import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "filter",
	pure: false
})
export class FilterPipe implements PipeTransform {
	transform(value: any, serverFilter): any {
		if (value.length === 0 || serverFilter === "") {
			return value;
		}
		const myFilterArray = [];
		for (const item.name of value) {
console.log(serverFilter, 'servereeee 2')
			if (item.name === serverFilter) {
				console.log(serverFilter, 'servereeee 3')
				myFilterArray.push(item);
			}
		}
		return myFilterArray;
	}
}
