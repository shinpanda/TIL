# 📝 TIL (2022.03.04)  
## DAY 15 
📖 오늘 읽은 범위 : 7장. 오류 처리
--- 
> 😄 **책에서 기억하고 싶은 내용을 써보세요.**  

- 오류 처리 코드로 인해 프로그램 논리를 이해하기 어려워진다면 깨끅한 코드라 부르기 어렵다.
- #### 오류 코드보다 예외를 사용하라 (p.130)
  - 예외를 지원하지 않는 언어는 오류를 처리하고 보고하는 방법이 제한적이었다. 오류 플래그를 설정하거나 호출자에게 오류 코드를 반환하는 방법이 전부였다.
  - 오류가 발생하면 예외를 던지는 편이 낫다. 그러면 호출자 코드가 더 깔끔해진다. 논리가 오류 처리 코드와 뒤섞이지 않으니까. 
- #### Try-Catch-Finally 문부터 작성하라 (p.132)
  - 예외가 발생할 코드를 짤 때는 try-catch-finally 문으로 시작하는 편이 낫다. 그러면 try 블록에서 무슨 일이 생기든지 호출자가 기대하는 상태를 정의하기 쉬워진다.
  - 파일이 없으면 예외를 던지는 단위 테스트를 짤 수 있다. 이 코드가 예외를 던지면 테스트가 성공한다. 이 시점에서 리팩터링이 가능하다. catch 블록에서 예외 유형을 좁혀 
  실제로 FileInputStream 생성자가 던지는 `FileNotFoundException`을 잡아 낸다.
  - 먼저 강제로 예외를 일으키는 테스트 케이스를 작성한 후 테스트를 통과하게 코드를 작성하는 방법을 권장한다. 그러면 자연스럽게 try 블록의 트랜잭션 범위부터 구현하게 되므로 범위 내에서
  트랜잭션 트랜잭션 본질을 유지하기 쉬워진다.
- #### 미확인(unchecked) 예외를 사용하라
  - 자바 초기 버전에는 확인된 예외가 멋진 아이디어로 여겨졌다. 메서드를 선언할 때는 메서드가 반환할 예외를 모두 열거했다.  
하지만 지금은 안정적인 소프트웨어를 제작하는 요소로 확인된 예외가 반드시 필요하지는 않다는 사실이 분명해졌다.  
그러므로 우리는 **확인된 오류가 치르는 비용에 상응하는 이익을 제공하는지** (철저히) 따져봐야 한다.
  - 확인된 예외는 OCP(Open Closed Principle)를 위반한다. 메서드에서 확인된 예외를 던졌는데 catch 블록이 세 단계 위에 있다면 그 사이 메서드 모두가 선언부에 해당 예외를 정의해야 한다.
즉, 하위 단계에서 코드를 변경하면 상위 단계 메서드 선언부를 전부 고쳐야 한다는 말이다.
  - 확인된 오류를 던진다면 함수는 선언부에 throws 절을 추가해야 한다. ... throws 경로에 위치하는 모든 함수가 최하위 함수에서 던지는 예외를 알아야 하므로 캡슐화가 깨진다.
  - 아주 중요한 라이브러리를 작성한다면 모든 예외를 잡아야 한다. 하지만 일반적인 애플리케이션은 **의존성이라는 비용이 이익보다 크다.**
- #### 예외에 의미를 제공하라
  - 오류 메시지에 정보를 담아 예외와 함께 던진다. 실패한 연산 이름과 실패 유형도 언급한다.
- #### 호출자를 고려해 예외 클래스를 정의하라
  - 애플리케이션에서 오류를 정의할 때 프로그래머에게 가장 중요한 관심사는 **오류를 잡아내는 방법**이 되어야 한다.
  - 대다수 상황에서 우리가 오류를 처리하는 방식은 (오류를 일으킨 원인과 무관하게) 비교적 일정하다. 1) 오류를 기록한다. 2) 프로그램을 계속 수행해도 좋은지 확인한다.
  - 실제 외부 API를 사용할 때는 감싸기 기법이 최선이다. 외부 API를 감싸면 외부 라이브러리와 프로그램 사이에서 의존성이 크게 줄어든다.
  ```java
    public class LocalPort {
      private ACMEPort innerPort;

      // 감싸기 기법 -> 적용 이전 소스 ACME port = new ACMEPort(12);
      public LocalPort(int portNumber){
        innerPort = new ACMEPort(portNumber);
      }

      public void open(){
        try{
          innerPort.open();
        } catch (DeviceResponseException e){
          throw new PortDeviceFailure(e);
        } catch (ATM1212UnlockedException e) {
          throw new PortDeviceFailure(e);
        } catch (GMXError e) {
          throw new PortDeviceFailure(e);
        }
      }
    }
  ```
- #### 정상 흐름을 정의하라
  - 앞의 지침을 따르면 비즈니스 논리와 오류 처리가 잘 분리된 코드가 나온다. ... 하지만 그러다 보면 오류 감지가 프로그램 언저리로 밀려난다. 때로는 이 방식이 적합하지 않은 때도 있다.
  - 특수 사례 패턴(SPECIAL CASE PATTERN) : 클래스를 만들거나 객체를 조작해 특수 사례를 처리하는 방식. 그러면 클라이언트 코드가 에외적인 상황을 처리할 가 없어진다.
클래스나 객체가 예외적인 상황을 캡슐화해서 처리하므로.
  - 예제
    ```java
    // 문제가 되는 코드
    try {
      MealExpences expenses = expenseReportDAO.getMeals(employee.getID());
      m_total += expenses.getTotal(); // 식비를 비용으로 청구했다면 직원이 청구한 식비를 총계에 더한다.
    } catch(MealExpensesNotFound e) {
      m_total += getMealPerDiem(); // 식비를 비용으로 청구하지 않았다면 일일 기본 식비를 총계에 더한다.
    }    
    // 이를 특수 사례 패턴을 적용하려 간결하게 정리한 코드
    MealExpences expenses = expenseReportDAO.getMeals(employee.getID());
    m_total += expenses.getTotal();
    // ExpenseReportDAO를 고쳐 언제나 MealExpense 객체를 반환하도록 수정하면 됨.
    // public class PerDiemMealExpenses implements MealExpenses ```

- #### `null`을 반환하지 마라  
  - null을 반환하는 코드는 일거리를 늘릴 뿐만 아니라 호출자에게 문제를 떠넘긴다.  
  - 메서드에서 null을 반환하고픈 유혹이 든다면 그 대신 예외를 던지거나 특수 사례 객체를 반환한다.  
  - `List<Object>`를 반환하는 메서드가 null을 반환하는 경우 자바에는 `Collections.emptyList()`가 있어 미리 정의된 읽기 전용 리스트를 반환하도록 처리할 수 있다.  
  
- #### `null`을 전달하지 마라  
  - 정상적인 인수로 null을 기대하는 API가 아니라면 메서드로 null을 전달하는 코드는 최대한 피한다.  
  
- #### 결론  
  - 오류 처리를 프로그램 논리와 분리하면 독립적인 추론이 가능해지며 코드 유지보수성도 크게 높아진다.  

> 🤔 **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**  

- 요즘 책을 읽고 나서 부터 업무에 적용하며 개발을 진행하고자 노력하고 있다.  
개발을 하면서 이렇게 쓰는 게 더 의미가 전달되지 않을까하고 변수명을 변경해보기도 하고, 메서드명도 변경하고 한 함수에 몰아 있던 로직을 분리하는 작업들을 나도 모르게 하고 있는 중이다.  
이러한 작업들을 하며 이전, 소스를 보며 들었던 생각들, 고민들이 책에 녹여져있음을 자꾸만 발견하게 되서 최대한 더 많이 적용하고 익히고 싶다는 마음이 든다.  
오늘도 마침 예외처리 관련해서 고민을 하고 있었는데, 범위가 마침 예외처리라 더 와닿았다.  
변수에서 null값을 반환할까봐 조건문에 `if(test == null || test.isEmpty())`라는 코드가 반복해서 작성되어 있어 고민이 자꾸 생겼는데 어떻게 처리하면 좋을지 갈피가 잡히는 것 같아 읽으면서 즐거웠다. 

> 🔎 **궁금한 내용이 있거나, 잘 이해되지 않는 내용이 있다면 적어보세요.**  
- 예외(Exception) / 에러(Error)
  - 예외 : 프로그램 내 발생하는 예외 상황으로 프로그램 내에서 처리가 가능.
  - 에러 : JVM 내에서 발생하는 에러로 프로그램 내에서 처리가 불가능한 것.
- 확인된(checked) 예외 / 미확인(unchecked) 예외
  - 확인된 예외 : 잘못된 코드가 아닌 잘못된 상황에서 발생하는 예외. 예외처리를 구현하지 않으면, 컴파일 에러 발생 (컴파일 시 확인해서 확인된 예외라 부름)
  - 미확인 예외 : 런타임 시 잘못 구현된 코드로 인해 발생하는 예외. 오류 없이 컴팡리 되나, 예외 처리가 될 때까지 프로그램이 실행되지 않으며,
  적절한 예외처리가 없을 경우 프로그램이 강제 종료. RuntimeException 등
- 기타 알아보고 싶어서 검색한 내용
  - `custom exception을 언제 써야 할까? https://tecoble.techcourse.co.kr/post/2020-08-17-custom-exception/`
  - Class RuntimeException (런타임 종류)  
     (자바8) https://docs.oracle.com/javase/8/docs/api/?java/lang/RuntimeException.html  
     (자바12) https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/lang/RuntimeException.html

- OCP(Open Closed Principle) : 개방-폐쇄 원칙
  - 소프트웨어 개체(클래스, 모듈, 함수 등등) 확장에 대해 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다.
- 특수 사례 패턴(SPECIAL CASE PATTERN) : 클래스를 만들거나 객체를 조작해 특수 사례를 처리하는 방식.
