!(function (window, document) {
  function GVerify(options) {
    // ����һ��ͼ����֤����󣬽���options����Ϊ����
    this.options = {
      // Ĭ��options����ֵ
      id: '', // ����Id
      canvasId: 'verifyCanvas', // canvas��ID
      width: '100', // Ĭ��canvas���
      height: '30', // Ĭ��canvas�߶�
      type: 'blend', // ͼ����֤��Ĭ������blend:������ĸ������͡�number:�����֡�letter:����ĸ
      code: '',
    };

    if (Object.prototype.toString.call(options) == '[object Object]') {
      // �жϴ����������
      for (const i in options) {
        // ���ݴ���Ĳ������޸�Ĭ�ϲ���ֵ
        this.options[i] = options[i];
      }
    } else {
      this.options.id = options;
    }

    this.options.numArr = '0,1,2,3,4,5,6,7,8,9'.split(',');
    this.options.letterArr = getAllLetter();

    this._init();
    this.refresh();
  }

  GVerify.prototype = {
    /** �汾��* */
    version: '1.0.0',

    /** ��ʼ������* */
    _init() {
      const con = document.getElementById(this.options.id);
      const canvas = document.createElement('canvas');
      this.options.width = con.offsetWidth > 0 ? con.offsetWidth : '100';
      this.options.height = con.offsetHeight > 0 ? con.offsetHeight : '30';
      canvas.id = this.options.canvasId;
      canvas.width = this.options.width;
      canvas.height = this.options.height;
      canvas.style.cursor = 'pointer';
      canvas.innerHTML = '����������汾��֧��canvas';
      con.appendChild(canvas);
      const parent = this;
      canvas.onclick = function () {
        parent.refresh();
      };
    },

    /** ������֤��* */
    refresh() {
      this.options.code = '';
      const canvas = document.getElementById(this.options.canvasId);
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
      } else {
        return;
      }

      ctx.textBaseline = 'middle';

      ctx.fillStyle = randomColor(180, 240);
      ctx.fillRect(0, 0, this.options.width, this.options.height);

      if (this.options.type == 'blend') {
        // �ж���֤������
        var txtArr = this.options.numArr.concat(this.options.letterArr);
      } else if (this.options.type == 'number') {
        var txtArr = this.options.numArr;
      } else {
        var txtArr = this.options.letterArr;
      }

      for (var i = 1; i <= 4; i++) {
        const txt = txtArr[randomNum(0, txtArr.length)];
        this.options.code += txt;
        ctx.font = `${randomNum(
          this.options.height / 2,
          this.options.height
        )}px SimHei`; // ������������С
        ctx.fillStyle = randomColor(50, 160); // �������������ɫ
        ctx.shadowOffsetX = randomNum(-3, 3);
        ctx.shadowOffsetY = randomNum(-3, 3);
        ctx.shadowBlur = randomNum(-3, 3);
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        const x = (this.options.width / 5) * i;
        const y = this.options.height / 2;
        const deg = randomNum(-30, 30);
        /** ������ת�ǶȺ�����ԭ��* */
        ctx.translate(x, y);
        ctx.rotate((deg * Math.PI) / 180);
        ctx.fillText(txt, 0, 0);
        /** �ָ���ת�ǶȺ�����ԭ��* */
        ctx.rotate((-deg * Math.PI) / 180);
        ctx.translate(-x, -y);
      }
      /** ���Ƹ�����* */
      for (var i = 0; i < 4; i++) {
        ctx.strokeStyle = randomColor(40, 180);
        ctx.beginPath();
        ctx.moveTo(
          randomNum(0, this.options.width),
          randomNum(0, this.options.height)
        );
        ctx.lineTo(
          randomNum(0, this.options.width),
          randomNum(0, this.options.height)
        );
        ctx.stroke();
      }
      /** ���Ƹ��ŵ�* */
      for (var i = 0; i < this.options.width / 4; i++) {
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          randomNum(0, this.options.width),
          randomNum(0, this.options.height),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    },

    /** ��֤��֤��* */
    validate(code) {
      var code = code.toLowerCase();
      const v_code = this.options.code.toLowerCase();
      if (code == v_code) {
        return true;
      }
      this.refresh();
      return false;
    },
  };
  /** ������ĸ����* */
  function getAllLetter() {
    const letterStr =
      'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
    return letterStr.split(',');
  }
  /** ����һ�������* */
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  /** ����һ�����ɫ* */
  function randomColor(min, max) {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return `rgb(${r},${g},${b})`;
  }
  window.GVerify = GVerify;
})(window, document);
