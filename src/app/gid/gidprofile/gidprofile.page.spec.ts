import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GidprofilePage } from './gidprofile.page';

describe('GidprofilePage', () => {
  let component: GidprofilePage;
  let fixture: ComponentFixture<GidprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GidprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GidprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
