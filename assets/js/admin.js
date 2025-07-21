function menu(index) {
  // 获取所有菜单项和内容区
  const menuItems = document.querySelectorAll('.admin-menu h2');
  const sections = document.querySelectorAll('.admin-sections > div');

  // 移除所有菜单项的 active 类
  menuItems.forEach(item => item.classList.remove('active'));
  // 给当前菜单项添加 active 类
  if (menuItems[index - 1]) {
    menuItems[index - 1].classList.add('active');
  }

  // 隐藏所有内容区
  sections.forEach(section => {
    section.style.display = 'none';
    section.classList.remove('fade-in');
  });
  // 显示对应内容区并添加动画类
  if (sections[index - 1]) {
    sections[index - 1].style.display = 'block';
    sections[index - 1].classList.add('fade-in');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  menu(1);
});