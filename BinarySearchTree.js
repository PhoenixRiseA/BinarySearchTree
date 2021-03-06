class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor () {
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchTree = function(node){
                if (data < node.data){
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                }else if (data > node.data) {
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    } else if(node.right !== null){
                        return searchTree(node.right);
                    }

                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    find(data) {
        let current = this.root;
        while(current.data !== data){
            if(data < current.data) {
                current = current.left;
            } else{
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }
    
    preOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function traversePreOrder(node) {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
          };
          traversePreOrder(this.root);
          return result;
        };
    }

    
    findMin() {
        let current = this.root;
        while (current.left !== null) {
          current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
          current = current.right;
        }
        return current.data;
    }


    // preOrder(){
    //     if(this.root == null){
    //         return null;
    //     }

    //     let result = new Array();

    //     result.push(this.root);

    //     while(result){
    //         let curr = result.pop();

    //         console.log(curr.data);

    //         if(curr.right){
    //             result.push(curr.right);
    //         }

    //         if(curr.left){
    //             result.push(curr.left);
    //         }
    //     }
    // }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMin());

