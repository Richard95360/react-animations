import React,{useState} from 'react';
import './Scroll.css'
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

const Scroll = () => {

    const [toggleTxt, setToggleTxt] = useState(false)

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform:toggleTxt ? "translateX(0)" : "tanslateX(-50%)"
    })

    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nesciunt, quo accusamus, culpa ex alias quasi repellat aspernatur magnam saepe vel, ipsa officia exercitationem. Eligendi porro distinctio doloremque qui illum cum similique officiis repellendus eius ipsum obcaecati esse enim quam magni, fuga odit fugiat maiores. Facere neque cupiditate accusamus magnam, quisquam animi, quod repellat ab aliquam ratione aperiam. Repellat exercitationem minus placeat ipsa iusto id sit natus deserunt fugiat. Asperiores assumenda nemo eaque, quod quia libero veritatis accusamus aliquid quidem nulla fugit quos iste numquam vitae eos, doloribus voluptatem fugiat qui excepturi dolore illo quae id dignissimos iusto! Quam possimus, fugit cum, eius ut, id rerum dolorem impedit unde consequuntur eveniet perspiciatis quidem? Similique amet repellat dicta at aliquid error quos aut soluta, mollitia ipsum aperiam nemo minus, numquam tempore! Sunt quisquam nulla aliquid. Sed voluptas, explicabo repellendus ullam, voluptatibus fuga quam quisquam aspernatur, assumenda est maxime illo. Facere, a doloribus, temporibus impedit est voluptatibus labore aliquid architecto consequuntur iusto accusantium cum, nemo quis. Eum tempore dolores corrupti maiores. Nihil sed, possimus maiores reiciendis unde odio expedita veritatis ad nam hic incidunt tempora ullam rerum molestias doloremque, architecto eius reprehenderit! Dolore laborum nesciunt harum consequuntur. Iste deleniti mollitia sequi libero?
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nesciunt, quo accusamus, culpa ex alias quasi repellat aspernatur magnam saepe vel, ipsa officia exercitationem. Eligendi porro distinctio doloremque qui illum cum similique officiis repellendus eius ipsum obcaecati esse enim quam magni, fuga odit fugiat maiores. Facere neque cupiditate accusamus magnam, quisquam animi, quod repellat ab aliquam ratione aperiam. Repellat exercitationem minus placeat ipsa iusto id sit natus deserunt fugiat. Asperiores assumenda nemo eaque, quod quia libero veritatis accusamus aliquid quidem nulla fugit quos iste numquam vitae eos, doloribus voluptatem fugiat qui excepturi dolore illo quae id dignissimos iusto! Quam possimus, fugit cum, eius ut, id rerum dolorem impedit unde consequuntur eveniet perspiciatis quidem? Similique amet repellat dicta at aliquid error quos aut soluta, mollitia ipsum aperiam nemo minus, numquam tempore! Sunt quisquam nulla aliquid. Sed voluptas, explicabo repellendus ullam, voluptatibus fuga quam quisquam aspernatur, assumenda est maxime illo. Facere, a doloribus, temporibus impedit est voluptatibus labore aliquid architecto consequuntur iusto accusantium cum, nemo quis. Eum tempore dolores corrupti maiores. Nihil sed, possimus maiores reiciendis unde odio expedita veritatis ad nam hic incidunt tempora ullam rerum molestias doloremque, architecto eius reprehenderit! Dolore laborum nesciunt harum consequuntur. Iste deleniti mollitia sequi libero?
            </p>
            <Waypoint
            bottomOffset="30%"
            onEnter={() => {
                if(!toggleTxt){
                    setToggleTxt(true)
                }
            }}
            />
            <animated.div style={animation} className="cta-section">
                <h2>N'en ratez pas une miette !</h2>
                <form>
                    <label htmlFor="email">Incrivez vous à la newletter</label>
                    <input type="email" id="email" />
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nesciunt, quo accusamus, culpa ex alias quasi repellat aspernatur magnam saepe vel, ipsa officia exercitationem. Eligendi porro distinctio doloremque qui illum cum similique officiis repellendus eius ipsum obcaecati esse enim quam magni, fuga odit fugiat maiores. Facere neque cupiditate accusamus magnam, quisquam animi, quod repellat ab aliquam ratione aperiam. Repellat exercitationem minus placeat ipsa iusto id sit natus deserunt fugiat. Asperiores assumenda nemo eaque, quod quia libero veritatis accusamus aliquid quidem nulla fugit quos iste numquam vitae eos, doloribus voluptatem fugiat qui excepturi dolore illo quae id dignissimos iusto! Quam possimus, fugit cum, eius ut, id rerum dolorem impedit unde consequuntur eveniet perspiciatis quidem? Similique amet repellat dicta at aliquid error quos aut soluta, mollitia ipsum aperiam nemo minus, numquam tempore! Sunt quisquam nulla aliquid. Sed voluptas, explicabo repellendus ullam, voluptatibus fuga quam quisquam aspernatur, assumenda est maxime illo. Facere, a doloribus, temporibus impedit est voluptatibus labore aliquid architecto consequuntur iusto accusantium cum, nemo quis. Eum tempore dolores corrupti maiores. Nihil sed, possimus maiores reiciendis unde odio expedita veritatis ad nam hic incidunt tempora ullam rerum molestias doloremque, architecto eius reprehenderit! Dolore laborum nesciunt harum consequuntur. Iste deleniti mollitia sequi libero?
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nesciunt, quo accusamus, culpa ex alias quasi repellat aspernatur magnam saepe vel, ipsa officia exercitationem. Eligendi porro distinctio doloremque qui illum cum similique officiis repellendus eius ipsum obcaecati esse enim quam magni, fuga odit fugiat maiores. Facere neque cupiditate accusamus magnam, quisquam animi, quod repellat ab aliquam ratione aperiam. Repellat exercitationem minus placeat ipsa iusto id sit natus deserunt fugiat. Asperiores assumenda nemo eaque, quod quia libero veritatis accusamus aliquid quidem nulla fugit quos iste numquam vitae eos, doloribus voluptatem fugiat qui excepturi dolore illo quae id dignissimos iusto! Quam possimus, fugit cum, eius ut, id rerum dolorem impedit unde consequuntur eveniet perspiciatis quidem? Similique amet repellat dicta at aliquid error quos aut soluta, mollitia ipsum aperiam nemo minus, numquam tempore! Sunt quisquam nulla aliquid. Sed voluptas, explicabo repellendus ullam, voluptatibus fuga quam quisquam aspernatur, assumenda est maxime illo. Facere, a doloribus, temporibus impedit est voluptatibus labore aliquid architecto consequuntur iusto accusantium cum, nemo quis. Eum tempore dolores corrupti maiores. Nihil sed, possimus maiores reiciendis unde odio expedita veritatis ad nam hic incidunt tempora ullam rerum molestias doloremque, architecto eius reprehenderit! Dolore laborum nesciunt harum consequuntur. Iste deleniti mollitia sequi libero?
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nesciunt, quo accusamus, culpa ex alias quasi repellat aspernatur magnam saepe vel, ipsa officia exercitationem. Eligendi porro distinctio doloremque qui illum cum similique officiis repellendus eius ipsum obcaecati esse enim quam magni, fuga odit fugiat maiores. Facere neque cupiditate accusamus magnam, quisquam animi, quod repellat ab aliquam ratione aperiam. Repellat exercitationem minus placeat ipsa iusto id sit natus deserunt fugiat. Asperiores assumenda nemo eaque, quod quia libero veritatis accusamus aliquid quidem nulla fugit quos iste numquam vitae eos, doloribus voluptatem fugiat qui excepturi dolore illo quae id dignissimos iusto! Quam possimus, fugit cum, eius ut, id rerum dolorem impedit unde consequuntur eveniet perspiciatis quidem? Similique amet repellat dicta at aliquid error quos aut soluta, mollitia ipsum aperiam nemo minus, numquam tempore! Sunt quisquam nulla aliquid. Sed voluptas, explicabo repellendus ullam, voluptatibus fuga quam quisquam aspernatur, assumenda est maxime illo. Facere, a doloribus, temporibus impedit est voluptatibus labore aliquid architecto consequuntur iusto accusantium cum, nemo quis. Eum tempore dolores corrupti maiores. Nihil sed, possimus maiores reiciendis unde odio expedita veritatis ad nam hic incidunt tempora ullam rerum molestias doloremque, architecto eius reprehenderit! Dolore laborum nesciunt harum consequuntur. Iste deleniti mollitia sequi libero?
            </p>
        </div>
    );
};

export default Scroll;