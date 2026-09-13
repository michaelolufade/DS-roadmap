// Questions for python-mastery
import { getRandomQuestions } from "../../utils/utils"

const questions = {
  level1: [
    {
      id: "p1q1",
      body: "What is the output?\n```python\nx = [1, 2, 3]\nprint(len(x))\n```",
      options: ["`3`", "`2`", "`[1, 2, 3]`", "`Error`"],
      correctAnswer: "`3`",
    },
    {
      id: "p1q2",
      body: "Which of these data types is mutable in Python?",
      options: ["`list`", "`tuple`", "`str`", "`int`"],
      correctAnswer: "`list`",
    },
    {
      id: "p1q3",
      body: "What is the output?\n```python\nprint(type(5.0))\n```",
      options: [
        "`<class 'float'>`",
        "`<class 'int'>`",
        "`<class 'double'>`",
        "`<class 'number'>`",
      ],
      correctAnswer: "`<class 'float'>`",
    },
    {
      id: "p1q4",
      body: "What is the correct way to create an empty dictionary?",
      options: ["`{}`", "`[]`", "`()`", "`set()`"],
      correctAnswer: "`{}`",
    },
    {
      id: "p1q5",
      body: "What does this code print?\n```python\nfor i in range(3):\n    print(i)\n```",
      options: ["`0 1 2`", "`1 2 3`", "`0 1 2 3`", "`3`"],
      correctAnswer: "`0 1 2`",
    },
    {
      id: "p1q6",
      body: "What is the output of `3 // 2`?",
      options: ["`1`", "`1.5`", "`2`", "`0`"],
      correctAnswer: "`1`",
    },
    {
      id: "p1q7",
      body: "Which keyword is used to define a function in Python?",
      options: ["`def`", "`func`", "`function`", "`lambda`"],
      correctAnswer: "`def`",
    },
    {
      id: "p1q8",
      body: "What is the output?\n```python\nx = 'hello'\nprint(x[1])\n```",
      options: ["`e`", "`h`", "`l`", "`o`"],
      correctAnswer: "`e`",
    },
    {
      id: "p1q9",
      body: "What is the output of `len('python')`?",
      options: ["`6`", "`5`", "`7`", "`Error`"],
      correctAnswer: "`6`",
    },
    {
      id: "p1q10",
      body: "Which of the following data types is immutable?",
      options: ["`tuple`", "`list`", "`dict`", "`set`"],
      correctAnswer: "`tuple`",
    },
    {
      id: "p1q11",
      body: "What is the output?\n```python\nx = [1, 2, 3]\nx.append(4)\nprint(x)\n```",
      options: ["`[1, 2, 3, 4]`", "`[4, 1, 2, 3]`", "`[1, 2, 3]`", "`Error`"],
      correctAnswer: "`[1, 2, 3, 4]`",
    },
    {
      id: "p1q12",
      body: "What is the purpose of `if`/`elif`/`else` in Python?",
      options: [
        "To branch code execution based on conditions",
        "To define a loop",
        "To define a function",
        "To handle exceptions",
      ],
      correctAnswer: "To branch code execution based on conditions",
    },
    {
      id: "p1q13",
      body: "What is the output of `10 % 3`?",
      options: ["`1`", "`3`", "`0`", "`3.33`"],
      correctAnswer: "`1`",
    },
    {
      id: "p1q14",
      body: "What is the correct syntax for a single-line comment in Python?",
      options: [
        "`# comment`",
        "`// comment`",
        "`<!-- comment -->`",
        "`/* comment */`",
      ],
      correctAnswer: "`# comment`",
    },
    {
      id: "p1q15",
      body: "What is the output?\n```python\nx = 5\ny = '5'\nprint(x == y)\n```",
      options: ["`False`", "`True`", "`Error`", "`None`"],
      correctAnswer: "`False`",
    },
    {
      id: "p1q16",
      body: "Which list method adds an item to the end of a list?",
      options: ["`append()`", "`insert()`", "`extend()`", "`add()`"],
      correctAnswer: "`append()`",
    },
    {
      id: "p1q17",
      body: "What is the output?\n```python\nprint(bool(0))\n```",
      options: ["`False`", "`True`", "`0`", "`Error`"],
      correctAnswer: "`False`",
    },
    {
      id: "p1q18",
      body: "Given `d = {'a': 1}`, how do you access the value for key `'a'`?",
      options: ["`d['a']`", "`d.a`", "`d(a)`", "`d->a`"],
      correctAnswer: "`d['a']`",
    },
    {
      id: "p1q19",
      body: "What is the output?\n```python\nx = (1, 2, 3)\nprint(x[0])\n```",
      options: ["`1`", "`2`", "`3`", "`Error`"],
      correctAnswer: "`1`",
    },
    {
      id: "p1q20",
      body: "What is the output of `type([])`?",
      options: [
        "`<class 'list'>`",
        "`<class 'tuple'>`",
        "`<class 'dict'>`",
        "`<class 'array'>`",
      ],
      correctAnswer: "`<class 'list'>`",
    },
  ],

  level2: [
    {
      id: "p2q1",
      body: "What is the output?\n```python\nsquares = [x**2 for x in range(5)]\nprint(squares)\n```",
      options: [
        "`[0, 1, 4, 9, 16]`",
        "`[1, 4, 9, 16, 25]`",
        "`[0, 1, 2, 3, 4]`",
        "`[0, 2, 4, 6, 8]`",
      ],
      correctAnswer: "`[0, 1, 4, 9, 16]`",
    },
    {
      id: "p2q2",
      body: "What does `sorted([3, 1, 2])` return?",
      options: ["`[1, 2, 3]`", "`[3, 2, 1]`", "`[3, 1, 2]`", "`None`"],
      correctAnswer: "`[1, 2, 3]`",
    },
    {
      id: "p2q3",
      body: "What is the output?\n```python\nd = {x: x**2 for x in range(3)}\nprint(d)\n```",
      options: [
        "`{0: 0, 1: 1, 2: 4}`",
        "`{0: 0, 1: 2, 2: 4}`",
        "`[0, 1, 4]`",
        "`{0, 1, 4}`",
      ],
      correctAnswer: "`{0: 0, 1: 1, 2: 4}`",
    },
    {
      id: "p2q4",
      body: "What is the output?\n```python\nx = [0, 1, 2, 3, 4, 5]\nprint(x[1:4])\n```",
      options: [
        "`[1, 2, 3]`",
        "`[1, 2, 3, 4]`",
        "`[0, 1, 2, 3]`",
        "`[2, 3, 4]`",
      ],
      correctAnswer: "`[1, 2, 3]`",
    },
    {
      id: "p2q5",
      body: "What does `*args` allow a function to accept?",
      options: [
        "A variable number of positional arguments",
        "A variable number of keyword arguments",
        "Exactly one argument",
        "Only default arguments",
      ],
      correctAnswer: "A variable number of positional arguments",
    },
    {
      id: "p2q6",
      body: "What does `**kwargs` allow a function to accept?",
      options: [
        "A variable number of keyword arguments",
        "A variable number of positional arguments",
        "Only lists",
        "Only tuples",
      ],
      correctAnswer: "A variable number of keyword arguments",
    },
    {
      id: "p2q7",
      body: "What is the output?\n```python\nprint({1, 2, 3} & {2, 3, 4})\n```",
      options: ["`{2, 3}`", "`{1, 2, 3, 4}`", "`{1}`", "`{4}`"],
      correctAnswer: "`{2, 3}`",
    },
    {
      id: "p2q8",
      body: "What does `list.pop()` do when called with no arguments?",
      options: [
        "Removes and returns the last item",
        "Removes and returns the first item",
        "Removes all items",
        "Returns the item without removing it",
      ],
      correctAnswer: "Removes and returns the last item",
    },
    {
      id: "p2q9",
      body: "What is the output?\n```python\nname = 'Sam'\nprint(f'Hi {name}')\n```",
      options: ["`Hi Sam`", "`Hi {name}`", "`Hi name`", "`Error`"],
      correctAnswer: "`Hi Sam`",
    },
    {
      id: "p2q10",
      body: "What is the output?\n```python\ndef f(a, b=5):\n    return a + b\nprint(f(3))\n```",
      options: ["`8`", "`3`", "`5`", "`Error`"],
      correctAnswer: "`8`",
    },
    {
      id: "p2q11",
      body: "What is the output?\n```python\nprint(list(zip([1, 2], [3, 4])))\n```",
      options: [
        "`[(1, 3), (2, 4)]`",
        "`[(1, 2), (3, 4)]`",
        "`[1, 3, 2, 4]`",
        "`[(1, 4), (2, 3)]`",
      ],
      correctAnswer: "`[(1, 3), (2, 4)]`",
    },
    {
      id: "p2q12",
      body: "What is the output?\n```python\nprint({1, 2, 2, 3})\n```",
      options: ["`{1, 2, 3}`", "`{1, 2, 2, 3}`", "`[1, 2, 2, 3]`", "`Error`"],
      correctAnswer: "`{1, 2, 3}`",
    },
    {
      id: "p2q13",
      body: "What does `x[::-1]` do when `x` is a list?",
      options: [
        "Returns the list reversed",
        "Removes the last element",
        "Sorts the list",
        "Returns every second element",
      ],
      correctAnswer: "Returns the list reversed",
    },
    {
      id: "p2q14",
      body: "What is the output?\n```python\nprint('abc'.upper())\n```",
      options: ["`ABC`", "`abc`", "`Abc`", "`Error`"],
      correctAnswer: "`ABC`",
    },
    {
      id: "p2q15",
      body: "What is the output?\n```python\nx = {'a': 1, 'b': 2}\nprint(list(x.keys()))\n```",
      options: ["`['a', 'b']`", "`[1, 2]`", "`('a', 'b')`", "`{'a', 'b'}`"],
      correctAnswer: "`['a', 'b']`",
    },
    {
      id: "p2q16",
      body: "What does `enumerate()` return when applied to a list?",
      options: [
        "An iterator of (index, value) pairs",
        "A sorted list",
        "A dictionary",
        "A single index",
      ],
      correctAnswer: "An iterator of (index, value) pairs",
    },
    {
      id: "p2q17",
      body: "What is the output of `min([4, 1, 7])`?",
      options: ["`1`", "`4`", "`7`", "`0`"],
      correctAnswer: "`1`",
    },
    {
      id: "p2q18",
      body: "What is the output?\n```python\na, b = 1, 2\nprint(a, b)\n```",
      options: ["`1 2`", "`2 1`", "`(1, 2)`", "`Error`"],
      correctAnswer: "`1 2`",
    },
    {
      id: "p2q19",
      body: "What is the output?\n```python\nprint('-'.join(['a', 'b', 'c']))\n```",
      options: ["`a-b-c`", "`abc`", "`a, b, c`", "`Error`"],
      correctAnswer: "`a-b-c`",
    },
    {
      id: "p2q20",
      body: "What is the output?\n```python\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)\n```",
      options: [
        "`[0, 2, 4, 6, 8]`",
        "`[1, 3, 5, 7, 9]`",
        "`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`",
        "`[2, 4, 6, 8]`",
      ],
      correctAnswer: "`[0, 2, 4, 6, 8]`",
    },
  ],

  level3: [
    {
      id: "p3q1",
      body: "Which keyword is used to define a class in Python?",
      options: ["`class`", "`def`", "`struct`", "`object`"],
      correctAnswer: "`class`",
    },
    {
      id: "p3q2",
      body: "In a class method, what does `self` refer to?",
      options: [
        "The instance the method is being called on",
        "The class itself",
        "The parent class",
        "A global variable",
      ],
      correctAnswer: "The instance the method is being called on",
    },
    {
      id: "p3q3",
      body: "Which special method is called automatically when an object is created?",
      options: ["`__init__`", "`__new__`", "`__create__`", "`__start__`"],
      correctAnswer: "`__init__`",
    },
    {
      id: "p3q4",
      body: "What is the output?\n```python\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog('Rex')\nprint(d.name)\n```",
      options: ["`Rex`", "`Dog`", "`name`", "`Error`"],
      correctAnswer: "`Rex`",
    },
    {
      id: "p3q5",
      body: "In `class Cat(Animal):`, what does this syntax represent?",
      options: [
        "`Cat` inherits from `Animal`",
        "`Cat` is a variable of type `Animal`",
        "`Animal` inherits from `Cat`",
        "`Cat` implements an interface called `Animal`",
      ],
      correctAnswer: "`Cat` inherits from `Animal`",
    },
    {
      id: "p3q6",
      body: "Which special method allows you to define a custom string representation for `print()`?",
      options: ["`__str__`", "`__repr__` only", "`__print__`", "`__string__`"],
      correctAnswer: "`__str__`",
    },
    {
      id: "p3q7",
      body: "What is the output?\n```python\nclass A:\n    x = 10\n\na1 = A()\na2 = A()\na1.x = 20\nprint(a2.x)\n```",
      options: ["`10`", "`20`", "`Error`", "`None`"],
      correctAnswer: "`10`",
    },
    {
      id: "p3q8",
      body: "Which decorator marks a method as a class method (operating on the class, not the instance)?",
      options: [
        "`@classmethod`",
        "`@staticmethod`",
        "`@property`",
        "`@abstractmethod`",
      ],
      correctAnswer: "`@classmethod`",
    },
    {
      id: "p3q9",
      body: "Which decorator marks a method that does not access `self` or the class at all?",
      options: [
        "`@staticmethod`",
        "`@classmethod`",
        "`@property`",
        "`@instancemethod`",
      ],
      correctAnswer: "`@staticmethod`",
    },
    {
      id: "p3q10",
      body: "What is the key difference between a class attribute and an instance attribute?",
      options: [
        "A class attribute is shared by all instances; an instance attribute belongs to one object",
        "An instance attribute is shared by all instances; a class attribute belongs to one object",
        "There is no difference",
        "Class attributes cannot be changed",
      ],
      correctAnswer:
        "A class attribute is shared by all instances; an instance attribute belongs to one object",
    },
    {
      id: "p3q11",
      body: "What is the output?\n```python\nclass Animal:\n    def speak(self):\n        return '...'\n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof'\n\nd = Dog()\nprint(d.speak())\n```",
      options: ["`Woof`", "`...`", "`Error`", "`None`"],
      correctAnswer: "`Woof`",
    },
    {
      id: "p3q12",
      body: "What does `super()` do inside a subclass?",
      options: [
        "Gives access to methods of the parent class",
        "Deletes the parent class",
        "Creates a new subclass",
        "Returns the class name as a string",
      ],
      correctAnswer: "Gives access to methods of the parent class",
    },
    {
      id: "p3q13",
      body: "What is the output?\n```python\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\nd = Dog('Rex', 'Lab')\nprint(d.name, d.breed)\n```",
      options: ["`Rex Lab`", "`Lab Rex`", "`Rex`", "`Error`"],
      correctAnswer: "`Rex Lab`",
    },
    {
      id: "p3q14",
      body: "What does encapsulation refer to in OOP?",
      options: [
        "Bundling data and methods together, and restricting direct access to internal state",
        "Allowing a class to inherit from multiple parents",
        "Converting a class into a function",
        "Making all attributes public",
      ],
      correctAnswer:
        "Bundling data and methods together, and restricting direct access to internal state",
    },
    {
      id: "p3q15",
      body: "By convention, how is a 'private' attribute typically denoted in Python?",
      options: [
        "With a leading underscore, e.g. `self._value`",
        "With the `private` keyword",
        "With all capital letters",
        "With a trailing underscore, e.g. `self.value_`",
      ],
      correctAnswer: "With a leading underscore, e.g. `self._value`",
    },
    {
      id: "p3q16",
      body: "What is method overriding?",
      options: [
        "A subclass redefines a method inherited from its parent class",
        "A method is called twice",
        "A method is deleted from a class",
        "A method is renamed",
      ],
      correctAnswer:
        "A subclass redefines a method inherited from its parent class",
    },
    {
      id: "p3q17",
      body: "What does `isinstance(obj, MyClass)` check?",
      options: [
        "Whether `obj` is an instance of `MyClass` (or a subclass)",
        "Whether `obj` equals `MyClass`",
        "Whether `MyClass` has a method called `obj`",
        "Whether `obj` is `None`",
      ],
      correctAnswer:
        "Whether `obj` is an instance of `MyClass` (or a subclass)",
    },
    {
      id: "p3q18",
      body: "What is the output?\n```python\nclass Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\nc1 = Counter()\nc2 = Counter()\nprint(Counter.count)\n```",
      options: ["`2`", "`1`", "`0`", "`Error`"],
      correctAnswer: "`2`",
    },
    {
      id: "p3q19",
      body: "Which special method controls the behavior of the `==` operator for custom objects?",
      options: ["`__eq__`", "`__equals__`", "`__cmp__`", "`__is__`"],
      correctAnswer: "`__eq__`",
    },
    {
      id: "p3q20",
      body: "What does `class C(A, B):` represent?",
      options: [
        "`C` uses multiple inheritance, inheriting from both `A` and `B`",
        "`C` inherits only from `A`",
        "`C` is an instance of `A` and `B`",
        "`A` and `B` inherit from `C`",
      ],
      correctAnswer:
        "`C` uses multiple inheritance, inheriting from both `A` and `B`",
    },
  ],

  level4: [
    {
      id: "p4q1",
      body: "What does the `@property` decorator do?",
      options: [
        "Allows a method to be accessed like an attribute",
        "Makes a method static",
        "Marks a method as abstract",
        "Prevents a method from being overridden",
      ],
      correctAnswer: "Allows a method to be accessed like an attribute",
    },
    {
      id: "p4q2",
      body: "What is the output?\n```python\nclass Circle:\n    def __init__(self, r):\n        self._r = r\n\n    @property\n    def area(self):\n        return 3.14159 * self._r ** 2\n\nc = Circle(2)\nprint(c.area)\n```",
      options: ["`12.56636`", "`6.28318`", "`4`", "`Error`"],
      correctAnswer: "`12.56636`",
    },
    {
      id: "p4q3",
      body: "What is the purpose of an abstract base class?",
      options: [
        "To define an interface that subclasses are required to implement",
        "To prevent a class from ever being instantiated in any way",
        "To store only constants",
        "To speed up program execution",
      ],
      correctAnswer:
        "To define an interface that subclasses are required to implement",
    },
    {
      id: "p4q4",
      body: "Which built-in Python module provides tools for defining abstract base classes?",
      options: ["`abc`", "`abstract`", "`typing`", "`inspect`"],
      correctAnswer: "`abc`",
    },
    {
      id: "p4q5",
      body: "What keyword does a generator function use instead of `return` to produce a value?",
      options: ["`yield`", "`return`", "`emit`", "`next`"],
      correctAnswer: "`yield`",
    },
    {
      id: "p4q6",
      body: "What is the output?\n```python\ndef gen():\n    yield 1\n    yield 2\n\ng = gen()\nprint(next(g))\n```",
      options: ["`1`", "`2`", "`[1, 2]`", "`Error`"],
      correctAnswer: "`1`",
    },
    {
      id: "p4q7",
      body: "What is the main benefit of a generator over a list for large datasets?",
      options: [
        "Lazy evaluation — values are produced one at a time, saving memory",
        "Generators are always faster to sort",
        "Generators can be indexed like lists",
        "Generators automatically remove duplicates",
      ],
      correctAnswer:
        "Lazy evaluation — values are produced one at a time, saving memory",
    },
    {
      id: "p4q8",
      body: "What is the purpose of a `try`/`except`/`finally` block?",
      options: [
        "To handle errors gracefully and optionally run cleanup code",
        "To define a loop that repeats until an error occurs",
        "To declare a class",
        "To import external modules",
      ],
      correctAnswer:
        "To handle errors gracefully and optionally run cleanup code",
    },
    {
      id: "p4q9",
      body: "What is the output?\n```python\ntry:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Error')\n```",
      options: ["`Error`", "`0`", "`Infinity`", "Nothing prints"],
      correctAnswer: "`Error`",
    },
    {
      id: "p4q10",
      body: "How do you define a custom exception in Python?",
      options: [
        "By creating a class that subclasses `Exception`",
        "By using the `raise` keyword alone",
        "By defining a function named `exception`",
        "Custom exceptions are not supported in Python",
      ],
      correctAnswer: "By creating a class that subclasses `Exception`",
    },
    {
      id: "p4q11",
      body: "What is the purpose of a `with` statement (context manager)?",
      options: [
        "To automatically manage setup and teardown of a resource (e.g. closing a file)",
        "To define a class",
        "To create a loop",
        "To import a module conditionally",
      ],
      correctAnswer:
        "To automatically manage setup and teardown of a resource (e.g. closing a file)",
    },
    {
      id: "p4q12",
      body: "Which two dunder methods implement the context manager protocol?",
      options: [
        "`__enter__` and `__exit__`",
        "`__start__` and `__stop__`",
        "`__open__` and `__close__`",
        "`__init__` and `__del__`",
      ],
      correctAnswer: "`__enter__` and `__exit__`",
    },
    {
      id: "p4q13",
      body: "What is the output order?\n```python\nclass MyContext:\n    def __enter__(self):\n        print('enter')\n        return self\n\n    def __exit__(self, *args):\n        print('exit')\n\nwith MyContext():\n    print('inside')\n```",
      options: [
        "`enter, inside, exit`",
        "`inside, enter, exit`",
        "`enter, exit, inside`",
        "`exit, enter, inside`",
      ],
      correctAnswer: "`enter, inside, exit`",
    },
    {
      id: "p4q14",
      body: "Which dunder method allows `len(obj)` to work on a custom object?",
      options: ["`__len__`", "`__size__`", "`__count__`", "`__length__`"],
      correctAnswer: "`__len__`",
    },
    {
      id: "p4q15",
      body: "How does composition differ from inheritance in OOP design?",
      options: [
        "Composition builds objects by containing other objects as attributes, rather than inheriting from them",
        "Composition and inheritance are the same thing",
        "Composition only works with abstract classes",
        "Composition means a class can have no methods",
      ],
      correctAnswer:
        "Composition builds objects by containing other objects as attributes, rather than inheriting from them",
    },
    {
      id: "p4q16",
      body: "What is 'duck typing' in Python?",
      options: [
        "An object's suitability is determined by the presence of certain methods/attributes, not its explicit type",
        "A typing system that requires explicit type declarations",
        "A method for typing function arguments only",
        "A way to convert types automatically",
      ],
      correctAnswer:
        "An object's suitability is determined by the presence of certain methods/attributes, not its explicit type",
    },
    {
      id: "p4q17",
      body: "What is the output?\n```python\nclass Stack:\n    def __init__(self):\n        self.items = []\n\n    def push(self, item):\n        self.items.append(item)\n\n    def pop(self):\n        return self.items.pop()\n\ns = Stack()\ns.push(1)\ns.push(2)\nprint(s.pop())\n```",
      options: ["`2`", "`1`", "`[1, 2]`", "`Error`"],
      correctAnswer: "`2`",
    },
    {
      id: "p4q18",
      body: "What is the purpose of `__repr__`?",
      options: [
        "To return an unambiguous string representation useful for debugging",
        "To convert an object to a boolean",
        "To delete an object",
        "To compare two objects for equality",
      ],
      correctAnswer:
        "To return an unambiguous string representation useful for debugging",
    },
    {
      id: "p4q19",
      body: "Which exception is raised when accessing an out-of-range list index?",
      options: ["`IndexError`", "`KeyError`", "`ValueError`", "`TypeError`"],
      correctAnswer: "`IndexError`",
    },
    {
      id: "p4q20",
      body: "What does the `raise` keyword do?",
      options: [
        "Manually triggers an exception",
        "Catches an exception",
        "Suppresses all warnings",
        "Defines a new class",
      ],
      correctAnswer: "Manually triggers an exception",
    },
  ],

  level5: [
    {
      id: "p5q1",
      body: "What do unit tests typically use to verify expected behavior?",
      options: [
        "`assert` statements",
        "`print()` statements",
        "`try`/`except` only",
        "Comments",
      ],
      correctAnswer: "`assert` statements",
    },
    {
      id: "p5q2",
      body: "What does this test verify?\n```python\ndef add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n```",
      options: [
        "That `add(2, 3)` returns `5`",
        "That `add` accepts strings",
        "That `add` raises an exception",
        "That `add` is a generator",
      ],
      correctAnswer: "That `add(2, 3)` returns `5`",
    },
    {
      id: "p5q3",
      body: "What is the main purpose of type hints in Python?",
      options: [
        "To improve readability and enable static type checking, without enforcing types at runtime",
        "To make the code run faster automatically",
        "To strictly enforce types at runtime, like a statically typed language",
        "To replace the need for docstrings entirely",
      ],
      correctAnswer:
        "To improve readability and enable static type checking, without enforcing types at runtime",
    },
    {
      id: "p5q4",
      body: "What does the `-> str` mean in this function signature?\n```python\ndef greet(name: str) -> str:\n    return f'Hello, {name}'\n```",
      options: [
        "It indicates the function's return type is `str`",
        "It indicates `name` must be converted to `str`",
        "It raises an error if the return value isn't printed",
        "It has no effect and is purely decorative",
      ],
      correctAnswer: "It indicates the function's return type is `str`",
    },
    {
      id: "p5q5",
      body: "What is a decorator in Python?",
      options: [
        "A function that wraps another function to modify or extend its behavior",
        "A special type of class attribute",
        "A built-in data structure",
        "A way to comment out code",
      ],
      correctAnswer:
        "A function that wraps another function to modify or extend its behavior",
    },
    {
      id: "p5q6",
      body: "What is the output order?\n```python\ndef my_decorator(func):\n    def wrapper():\n        print('Before')\n        func()\n        print('After')\n    return wrapper\n\n@my_decorator\ndef say_hi():\n    print('Hi')\n\nsay_hi()\n```",
      options: [
        "`Before, Hi, After`",
        "`Hi, Before, After`",
        "`Before, After, Hi`",
        "`Hi`",
      ],
      correctAnswer: "`Before, Hi, After`",
    },
    {
      id: "p5q7",
      body: "Why are pure functions (no side effects, deterministic output) preferred for writing testable code?",
      options: [
        "Given the same input, they always produce the same output, making them predictable and easy to test",
        "They automatically run faster than other functions",
        "They cannot raise exceptions",
        "They never need type hints",
      ],
      correctAnswer:
        "Given the same input, they always produce the same output, making them predictable and easy to test",
    },
    {
      id: "p5q8",
      body: "What is 'mocking' used for in unit testing?",
      options: [
        "Replacing real dependencies (e.g. a database or API) with simulated objects during a test",
        "Automatically generating documentation",
        "Compiling Python code to bytecode",
        "Formatting code according to PEP 8",
      ],
      correctAnswer:
        "Replacing real dependencies (e.g. a database or API) with simulated objects during a test",
    },
    {
      id: "p5q9",
      body: "Which clean-code principle states that a function or class should have only one reason to change?",
      options: [
        "Single Responsibility Principle",
        "Open/Closed Principle",
        "DRY (Don't Repeat Yourself)",
        "Law of Demeter",
      ],
      correctAnswer: "Single Responsibility Principle",
    },
    {
      id: "p5q10",
      body: "What is the key difference in memory usage between a list and a generator holding the same sequence of values?",
      options: [
        "A generator produces values lazily and doesn't store them all in memory at once, unlike a list",
        "A list uses less memory than a generator",
        "There is no difference in memory usage",
        "A generator must always be converted to a list before use",
      ],
      correctAnswer:
        "A generator produces values lazily and doesn't store them all in memory at once, unlike a list",
    },
    {
      id: "p5q11",
      body: "What is the output?\n```python\nsquares = (x**2 for x in range(5))\nprint(type(squares))\n```",
      options: [
        "`<class 'generator'>`",
        "`<class 'list'>`",
        "`<class 'tuple'>`",
        "`<class 'function'>`",
      ],
      correctAnswer: "`<class 'generator'>`",
    },
    {
      id: "p5q12",
      body: "What happens when an `assert` statement's condition evaluates to `False`?",
      options: [
        "It raises an `AssertionError`",
        "It silently continues execution",
        "It raises a `ValueError`",
        "It prints a warning but continues",
      ],
      correctAnswer: "It raises an `AssertionError`",
    },
    {
      id: "p5q13",
      body: "What is the primary purpose of a docstring in Python?",
      options: [
        "To document what a function, class, or module does",
        "To improve runtime performance",
        "To enforce type checking",
        "To suppress warnings",
      ],
      correctAnswer: "To document what a function, class, or module does",
    },
    {
      id: "p5q14",
      body: "In pandas, what does `df.head()` do by default?",
      options: [
        "Returns the first 5 rows of the DataFrame",
        "Returns the last 5 rows of the DataFrame",
        "Returns the column names only",
        "Removes the first 5 rows of the DataFrame",
      ],
      correctAnswer: "Returns the first 5 rows of the DataFrame",
    },
    {
      id: "p5q15",
      body: "What does `np.array([1, 2, 3]).shape` return in NumPy?",
      options: ["`(3,)`", "`(1, 3)`", "`(3, 1)`", "`3`"],
      correctAnswer: "`(3,)`",
    },
    {
      id: "p5q16",
      body: "What does `df.dropna()` do in pandas?",
      options: [
        "Removes rows containing missing (NaN) values",
        "Fills missing values with zero",
        "Removes duplicate rows",
        "Drops all columns with numeric data",
      ],
      correctAnswer: "Removes rows containing missing (NaN) values",
    },
    {
      id: "p5q17",
      body: "In the context of clean code, what does 'low coupling, high cohesion' mean?",
      options: [
        "Modules should be self-contained and focused, with minimal dependency on each other",
        "All code should be in a single module for simplicity",
        "Every function should call every other function",
        "Variables should always be global",
      ],
      correctAnswer:
        "Modules should be self-contained and focused, with minimal dependency on each other",
    },
    {
      id: "p5q18",
      body: "Why does dependency injection make code easier to test?",
      options: [
        "It lets you swap in test doubles (mocks/stubs) for real dependencies without changing the class's code",
        "It automatically writes tests for you",
        "It removes the need for functions to have parameters",
        "It prevents any exceptions from being raised",
      ],
      correctAnswer:
        "It lets you swap in test doubles (mocks/stubs) for real dependencies without changing the class's code",
    },
    {
      id: "p5q19",
      body: "What is the purpose of the `if __name__ == '__main__':` guard in a Python script?",
      options: [
        "It ensures the enclosed code only runs when the file is executed directly, not when imported as a module",
        "It defines the entry point required by the Python interpreter",
        "It prevents the script from being imported at all",
        "It declares the main class of the program",
      ],
      correctAnswer:
        "It ensures the enclosed code only runs when the file is executed directly, not when imported as a module",
    },
    {
      id: "p5q20",
      body: "What design pattern does this implement?\n```python\nclass Config:\n    _instance = None\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n```",
      options: ["Singleton", "Factory", "Observer", "Decorator"],
      correctAnswer: "Singleton",
    },
  ],
}

export const pythonMastery = getRandomQuestions(questions)
