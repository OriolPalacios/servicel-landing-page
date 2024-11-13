// '<text data-width="145" style="font-size: 18px;" fill="#039BE5" x="100" y="55">{val}</text>'
OrgChart.templates.ula.field_0 = '<text data-width="145" text-anchor="middle" text-align="center" data-text-overflow="multiline" style="font-size: 18px;" fill="#039BE5" x="130" y="30" >{val}</text>';

// '<text data-width="185" style="font-size: 14px;" fill="#ffffff" x="100" y="145" text-anchor="middle">{val}</text>'
OrgChart.templates.diva.field_1 = '<text data-width="185" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="100" y="145" text-anchor="middle">{val}</text>'; 
 
let chart = new OrgChart('#org-chart', {
    mouseScrool: OrgChart.none,
    toolbar: {
        layout: true,
        zoom: true,
        fit: true,
        expandAll: true
    },
    enableSearch: false,
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    tags: {
        "main": {
            template: "belinda"
        },
        "area": {
            template: "ula"
        },
        "bosses": {
            template: "diva"
        }
    },
    nodes: [
        { id: 1, name: "Andric", tags: ["main"], title: "Gerente General", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 2, pid: 1, tags: ["area"],  name: "Área de obtención de repuestos"},
        { id: 3, pid: 1, tags: ["area"],  name: "Área de distribución de repuestos"},
        { id: 4, pid: 1, tags: ["area"],  name: "Área de reparación de equipos móviles"},
        { id: 5, pid: 1, tags: ["area"],  name: "Área de ventas"},
        { id: 6, pid: 2, tags: ["bosses"], name: "Andric1", title: "Jefe de Obtención de repuestos", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 7, pid: 3, tags: ["bosses"], name: "Andric2", title: "Jefe de Distribución de repuestos", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 8, pid: 4, tags: ["bosses"], name: "Andric3", title: "Jefe de Reparaciones", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 9, pid: 5, tags: ["bosses"], name: "Andric4", title: "Jefe de Ventas", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 10, pid: 6, tags: ["area"], name: "Equipo de Logística de Repuestos", },
        { id: 11, pid: 7, tags: ["area"], name: "Equipo de Distribución", },
        { id: 12, pid: 8, tags: ["area"], name: "Equipo de Técnicos", },
        { id: 13, pid: 9, tags: ["area"], name: "Equipo de Ventas", },

    ]
})
