import { defineComponent, ref } from "vue";
import Button from "../../components/Button";
import Center from "../../components/Center";
import FloatButton from "../../components/FloatButton";
import NavBar from "../../layout/NavBar";
import SideBar from "../../layout/SideBar";
import s from "./index.module.scss";
export default defineComponent({
  name: "StartPage",
  setup() {
    const OverlayVisible = ref(false);
    const onClickMenu = () => {
      OverlayVisible.value = true;
    };
    return () => (
      <div>
        <nav>
          <NavBar>
            {{
              icon: () => <svg-icon icon="menu" onClick={onClickMenu} />,
              default: () => "山竹记账",
            }}
          </NavBar>
        </nav>
        <Center class={s.icon_wrapper}>
          <svg-icon icon="pig" class={s.icon} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton icon="add" draggable/>
        <SideBar v-model:show={OverlayVisible.value}/>
      </div>
    );
  },
});