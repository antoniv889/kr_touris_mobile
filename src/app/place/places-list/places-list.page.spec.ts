import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesListPage } from './places-list.page';

describe('PlacesListPage', () => {
  let component: PlacesListPage;
  let fixture: ComponentFixture<PlacesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
