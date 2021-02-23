import socket
import traceback
import time
import os

def analysis(str_):
    str_ = str_.decode()
    print(str_)
    if str_ == "online_check_in":
        #TODO:执行线上点名的python脚本并返回相应的数据（return）
        return "online_check_in"
    elif str_ == "offline_check_in":
        # todo:执行线下点名的python脚本并返回相应的数据（return）
        return "offline_check_in"
    elif str_ == "online_check_behavior":
        # todo:执行线上行为检测的python脚本并返回相应的数据（return）
        return "online_check_behavior"
    elif str_ == "offline_check_behavior_danger":
        # todo:执行线下危险行为检测的python脚本并返回相应的数据（return）
        return "offline_check_behavior_danger"
    elif str_ == "offline_check_behavior_state":
        # todo:执行线下状态检测的python脚本并返回相应的数据（return）
        return "offline_check_behavior_state"
    elif str_ == "offlineBehaviorAfterStart":
        a = os.system("cd src/renderer/assets/python/outline_class_new && start python main_after.py")
    elif str_ == "fanhuishipin":
        a = os.system("cd src/renderer/assets/python/videoShow && start python v.py && pause")
    else:
        return "未有效定义的数据"

host = ""
port = 800
address = (host, port)
time_now = time.strftime("%Y-%m-%d %H:%S:%M", time.localtime())

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.bind(address)
s.listen(1)

while True:
    print("Waiting for connections...")
    try:
        client_connection, client_address = s.accept()
    except KeyboardInterrupt:
        raise
    except:
        traceback.print_exc()
        continue

    try:
        print("Got connection from", client_connection.getpeername())
        while True:
            # client_connection.settimeout(5)
            buf = client_connection.recv(1024)
            if len(buf) == 0:  # break,跳出while循环
                break
            else:
                client_connection.send(bytes(analysis(buf), encoding="utf8"))
    except (KeyboardInterrupt, SystemError):
        raise
    except:
        traceback.print_exc()

try:
    client_connection.close()
except KeyboardInterrupt:
    raise
except:
    traceback.print_exc()
