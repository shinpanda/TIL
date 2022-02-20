# :pencil: TIL (2022.02.20)
## DAY 3
:book: 오늘 읽은 범위 : 2장.의미있는 이름
---
 > :smile: **책에서 기억하고 싶은 내용을 써보세요.**
 - 클래스 이름과 객체 이름은 명사나 명사구가 적합하다. Customer, WildPage, Account, AddressParser 등이 좋은 예다. Manager, Processor, Data, Info 등과 같은 단어는 피하고, 동사는 사용하지 않는다. (p.32)
 - 메서드 이름은 동사나 동사구가 적합하다. postPayment, deletePage, svae 등이 좋은 예다. 접근자(Accessor), 변경자(Mutator), 조건자(Predicate)는 javabean 표준에 따라 값 앞에 get, set, is를 붙인다.(p.32)
 - 생성자(Constructor)를 중복정의(overload)할 때는 정적 팩토리 메서드를 사용한다. 메서드는 인수를 설명하는 이름을 사용한다.
    ``Complex fulcrumPoint = Complex.FromRealNumber(23.0);``  
   위 코드가 아래 코드보다 좋다.  
    ``Complex fulcrumPoint = new Complex(23.0);`` (p.32)
 
 > :thinking: **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**
 - 항상 코딩을 할 때 자연스럽게 고민을 하게 되는 부분이 아닌가 싶다. 어디에 사용되는 변수인지 몰라 삭제하지 못하고 이 변수를 남겨야 하는 것인지 고민했던 경험이 있어 더욱 그러하다.  
지금도 강의를 들으며 이렇게 변수를 이름 지을 수 있구나를 깨달을 때가 있다. 영어가 힘들다고 간단하게 의미있는 변수이면 되지 않을까? 라고 생각했으나, 그 간단하게 이름 지은 변수를 다른 누군가가 소스를 읽지 않고 한번에 파악이 가능했을 거 같지 않아 반성이 된다.  
가끔 어떻게 메소드 명을 지어야 할 지 고민될 때가 있었는데, 위 내용을 기억하고 가끔 다시 찾아서 익혀두는 게 좋겠다.

 > :mag_right: **궁금한 내용이 있거나, 잘 이해되지 않는 내용이 있다면 적어보세요.**
 - accountAddress와 customerAddress는 Address 클래스 인스턴스로는 좋은 이름이나 클래스 이름으로는 적합하지 못하다. Address는 클래스 이름으로 적합하다. 포트 주소, MAC 주소, 웹 주소를 구분해야 한다면 PostalAddress, MAC, URI라는 이름도 괜찮겠다. (p.37~38)
