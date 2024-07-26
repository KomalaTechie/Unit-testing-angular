import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'fileSize', standalone: true})

export class CustomPipe implements PipeTransform {
    transform(size: number, type = ' GB') {
         return 'File size is - ' +( size / (1024 * 1024)).toFixed(2) + type; 
    }
}