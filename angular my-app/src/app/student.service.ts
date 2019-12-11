import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    name = 'qwerty';

    printData() {
        console.log('this is a function from StudentService');
        return this.name;
    }

}
