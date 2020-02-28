import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddNewPassengerComponent } from './add-new-passenger.component';

describe('AddNewPassengerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AddNewPassengerComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AddNewPassengerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });  
});
