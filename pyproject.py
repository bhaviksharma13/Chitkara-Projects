# Game Board Declaration
board = [['1','2','3'],
         ['4','5','6'],
         ['7','8','9']]


# Welcome and Rules
print("\n\n\t\tWelcome to Tic-Tac-Toe\n")
print("Rules: You have to choose digit from board where you want to mark.\n")


# Input, First choice
start = input("Choose Capital \'X\' or \'O\'\n")


# For Wrong Input
while True:
    if start == 'X' or start == 'O':
        print("~Choice Selected")
        break
    else:
        start = input("Choose Capital \'X\' or \'O\'\n")

# Next Turn
def nextSymbol(prev):
    if prev == 'X':
        return 'O'
    return 'X'


def replace(curr_turn, where, board):
    row = (where-1) // 3
    col = (where-1) % 3
    
    if board[row][col] == 'X' or board[row][col] == 'O':
        print("Already Selected")
        return 0
    else:
        board[row][col] = curr_turn
        return 1


def display():
    for i in board:
        for j in i:
            print(j, end = "  |  ")
        print("\n")
        
        
def isWin(board):    
    for i in range(3):
        # Check rows
        if board[i][0] == board[i][1] == board[i][2]:
            return True
        # Check columns
        if board[0][i] == board[1][i] == board[2][i]:
            return True

   # Check diagonals
    if board[0][0] == board[1][1] == board[2][2]:
        return True
    if board[0][2] == board[1][1] == board[2][0]:
        return True
    
    return False


# Game Loop
i=9
while(i):
    curr_turn = start
    display()
    where = int(input(f"Player {curr_turn} Turn\n"))
    x = replace(curr_turn, where, board)
    if i < 6:
        if isWin(board):
            display()
            print("\nPlayer", curr_turn, "wins")
            break
    start = nextSymbol(curr_turn)
    i -= x

if isWin(board) == False:
    print("\n~It's a Tie")
    print("\t\tGame Ends")