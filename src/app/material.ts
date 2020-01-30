import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,} from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgModule} from '@angular/core'

@NgModule({
    imports: [
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatFormFieldModule
    ],
    exports:[
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatFormFieldModule
    ]
})

export class MaterialModule {}