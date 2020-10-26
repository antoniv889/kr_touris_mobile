import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastroObjectPage } from './gastro-object.page';

describe('GastroObjectPage', () => {
  let component: GastroObjectPage;
  let fixture: ComponentFixture<GastroObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastroObjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastroObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
