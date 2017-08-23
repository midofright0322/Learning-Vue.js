export default {
    install: function(Vue) {
        Vue.directive('sine', function(el, binding) {
            el.innerHTML = Math.sin(binding.value);
        });
        
        Vue.directive('cosine', function(el, binding) {
            el.innerHTML = Math.cos(binding.value);
        });

        Vue.directive('tangent', function(el, binding) {
            el.innerHTML = Math.tan(binding.value);
        })
    }
}