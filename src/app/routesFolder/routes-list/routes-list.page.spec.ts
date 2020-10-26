import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutesListPage } from './routes-list.page';

describe('RoutesListPage', () => {
  let component: RoutesListPage;
  let fixture: ComponentFixture<RoutesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
