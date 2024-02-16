import { h } from "preact";
import "component-vdom/loader";

const employees = [
  {
    name: "Leonel Gregio Auler",
    avatar: "styles/images/avatar-leonel.png",
    title: "Desenvolvedor",
    work: 51981021381,
    email: "leonel.lga@gmail.com",
  },
  {
    name: "LGA Gregio",
    avatar: null,
    title: "Desenvolvedor",
    work: 51912345678,
    email: "lga@gmail.com",
  },
];

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <div>
        {employees.map((emp) => {
          return (
            <component-vdom
              name={emp.name}
              avatar={emp.avatar}
              work-title={emp.title}
              work-number={emp.work}
              email={emp.email}>
            </component-vdom>
          );
        })}
      </div>
    </div>
  );
};
