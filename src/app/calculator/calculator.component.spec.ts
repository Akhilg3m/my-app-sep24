import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Required for ngModel binding
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  // Setup TestBed
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule] // Import FormsModule to use ngModel
    })
    .compileComponents();
  });

  // Create the component instance before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  // Test if the component is created
  it('should create the calculator component', () => {
    expect(component).toBeTruthy();
  });

  // Test initial values of num1, num2, and result
  it('should have initial values as 0 for num1, num2, and result', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.result).toBe(0);
  });

  // Test sum method
  it('should calculate the sum of num1 and num2', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.sum();
    expect(component.result).toBe(8);
  });

  // Test button click updates result
  it('should update result when sum button is clicked', () => {
    component.num1 = 10;
    component.num2 = 20;
    let sumButton = fixture.debugElement.nativeElement.querySelector('button:nth-of-type(1)');
    
    // Simulate button click
    sumButton.click();
    fixture.detectChanges(); // Update the view after clicking

    expect(component.result).toBe(30);
  });

  // Test if the sum button is disabled when either num1 or num2 is 0
  it('should disable the sum button if num1 or num2 is 0', () => {
    component.num1 = 0;
    component.num2 = 5;
    fixture.detectChanges(); // Detect changes after setting values
    let sumButton = fixture.debugElement.nativeElement.querySelector('button:nth-of-type(1)');
    expect(sumButton.disabled).toBeTrue();

    component.num1 = 5;
    component.num2 = 5;
    fixture.detectChanges(); // Detect changes after setting values
    expect(sumButton.disabled).toBeFalse();
  });

  // Test edge cases: negative numbers, zero, and large numbers
  it('should handle negative numbers', () => {
    component.num1 = -5;
    component.num2 = -3;
    component.sum();
    expect(component.result).toBe(-8);
  });

  it('should handle sum of zero', () => {
    component.num1 = 0;
    component.num2 = 10;
    component.sum();
    expect(component.result).toBe(10);
  });

  it('should handle large numbers', () => {
    component.num1 = 1000000;
    component.num2 = 2000000;
    component.sum();
    expect(component.result).toBe(3000000);
  });

  // Test if num1 and num2 are updated when user types in input fields
  it('should update num1 and num2 when input fields change', () => {
    const input1 = fixture.debugElement.nativeElement.querySelector('input:nth-of-type(1)');
    const input2 = fixture.debugElement.nativeElement.querySelector('input:nth-of-type(2)');

    input1.value = '15';
    input2.value = '25';
    input1.dispatchEvent(new Event('input'));
    input2.dispatchEvent(new Event('input'));

    fixture.detectChanges(); // Detect changes after user input

    expect(component.num1).toBe(15);
    expect(component.num2).toBe(25);
  });

  // Test if sum button is disabled when num1 and num2 are both 0
  it('should disable the sum button when num1 and num2 are both 0', () => {
    component.num1 = 0;
    component.num2 = 0;
    fixture.detectChanges();
    let sumButton = fixture.debugElement.nativeElement.querySelector('button:nth-of-type(1)');
    expect(sumButton.disabled).toBeTrue();
  });

  // Test if sum method returns 0 when both num1 and num2 are 0
  it('should return 0 if num1 and num2 are both 0', () => {
    component.num1 = 0;
    component.num2 = 0;
    component.sum();
    expect(component.result).toBe(0);
  });
});
