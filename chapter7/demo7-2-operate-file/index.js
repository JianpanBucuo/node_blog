var isPalindrome = function(x) {
    const a = String(x);
    const arr = a.split('');
    const rev = arr.reverse();
    if (rev.join('') == a) {
        return true;
    } else {
        return false;
    }
};
isPalindrome(1212)