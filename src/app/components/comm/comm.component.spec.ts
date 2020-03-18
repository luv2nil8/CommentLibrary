import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommComponent } from './comm.component';

describe('CommComponent', () => {
  let component: CommComponent;
  let fixture: ComponentFixture<CommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
