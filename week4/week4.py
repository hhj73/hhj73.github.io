import random

while True:
    user_choice = input("가위, 바위, 보 중에 선택하세요 (끝내려면 '끝'을 입력하세요): ")
    computer_choice = random.choice(["가위", "바위", "보"])
    
    if user_choice == "끝":
        print("게임을 종료합니다.")
        break
        
    if user_choice not in ["가위", "바위", "보"]:
        print("잘못된 입력입니다. 다시 입력하세요.")
        continue
        
    print("사용자:", user_choice)
    print("컴퓨터:", computer_choice)
    
    if user_choice == computer_choice:
        print("비겼습니다.")
    elif user_choice == "가위" and computer_choice == "보":
        print("이겼습니다!")
    elif user_choice == "바위" and computer_choice == "가위":
        print("이겼습니다!")
    elif user_choice == "보" and computer_choice == "바위":
        print("이겼습니다!")
    else:
        print("졌습니다.")
        