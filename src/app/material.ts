import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import {NgModule} from '@angular/core'

@NgModule({
    imports: [
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule
    ],
    exports:[
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule
    ]
})

export class MaterialModule {}