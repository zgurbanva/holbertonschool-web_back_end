#!/usr/bin/env python3
"""Type-annotated function floor"""
from math import floor as math_floor


def floor(n: float) -> int:
    """Return the floor of a float"""
    return math_floor(n)
