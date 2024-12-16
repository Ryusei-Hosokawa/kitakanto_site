import { useInView } from 'react-intersection-observer';

type ScrollTriggerProps = {
    threshold?: number;
    triggerOnce?: boolean;
};

export function useScrollTrigger({
    threshold = 0.1,
    triggerOnce = true,
}: ScrollTriggerProps) {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce,
    });
    return { 
        ref,
        inView,
    };
}

/* 
【使い方】
使用したいコンポーネントで呼び出し、
下記のようにオプションの設定をコンポーネント内に記述。

const { ref, inView } = useScrollTrigger({
    threshold: 0.2,
    triggerOnce: true,
});

その後、refをコンポーネントの監視対象の要素タグ内のref属性に設定（ref={ref}）し、
inViewが返す真偽値を利用して条件分岐によるクラスの切り替えを設定する。
*/