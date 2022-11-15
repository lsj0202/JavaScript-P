var current = Object.prototype.valueOf;

// 내가 지정한 속성 "-prop-value"은 범분야에 걸쳐 사용되고 있고
// 항상 동일한 프로토타입 체인에 있지 않기 때문에, Object.prototype을 수정하고 싶습니다.
Object.prototype.valueOf = function () {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // 내가 만든 객체가 아닌 것 같으므로,
    // 가능한 최선을 다해 원래의 동작을 재현하여 기본 동작으로 돌아가겠습니다.
    // 'apply' 메서드는 다른 언어에서의 'super'처럼 작동합니다.
    // valueOf()가 arguments를 취하지 않더라도, 다른 hook이 있으리라 생각합니다.
    return current.apply(this, arguments);
  }
}