import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,} from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

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
        MatMenuModule
    ],
    exports:[
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule
    ]
})

export class MaterialModule {}